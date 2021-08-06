import {ConstructorElement, DragIcon,} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor-elem.module.css";
import {MOVE_CONSTRUCTOR_ITEM, REMOVE_CONSTRUCTOR_ITEM} from "../../../../services/actions/ingredients";
import {useDispatch} from "react-redux";
import {useDrag, useDrop} from "react-dnd";
import {useRef} from "react";
import {IBurgerElement} from "../../../../utils/burgerElement";

interface IConstructorElement extends IBurgerElement {

}

interface IBurgerConstructorElem {
    burgerConstructorElemData: IConstructorElement,
    type?: 'top' | 'bottom',
    index?: number,
    postfix?: string,
    locked?: boolean
}

export const BurgerConstructorElem = (props: IBurgerConstructorElem) => {
    const {type, burgerConstructorElemData, index, postfix, locked} = props;
    const dispatch = useDispatch();

    function handleClose() {
        dispatch({
            type: REMOVE_CONSTRUCTOR_ITEM,
            index: index,
        });
    }

    const ref = useRef(null);

    const [{handlerId}, drop] = useDrop({
        accept: "card-list",
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            dispatch({
                type: MOVE_CONSTRUCTOR_ITEM,
                payload: {dragIndex, hoverIndex},
            });

            item.index = hoverIndex;
        },
    });

    const [{isDragging}, drag] = useDrag({
        type: "card-list",
        item: () => {
            return {burgerConstructorElemData, index};
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    drag(drop(ref));
    const opacity = isDragging ? 0 : 1;
    if (Object.keys(burgerConstructorElemData).length === 0) return (
        <div className="text text_type_main-default">Выберите ингредиент</div>)
    return (
        <div
            ref={ref}
            data-handler-id={handlerId}
            className={`${styles["burger-constructor-elem"]} m-4`}
            style={{opacity}}
        >
            {burgerConstructorElemData.type !== "bun" ? (
                <DragIcon type="primary"/>
            ) : null}

            <ConstructorElement
                text={`${burgerConstructorElemData?.name}${postfix}`}
                price={burgerConstructorElemData?.price}
                thumbnail={burgerConstructorElemData?.image}
                type={type}
                isLocked={locked}
                handleClose={handleClose}
            />
        </div>
    );
}
