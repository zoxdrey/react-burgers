import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor-elem.module.css";
import PropTypes from "prop-types";
import { burgerType } from "../../utils/burgerType";
import { REMOVE_CONSTRUCTOR_ITEM } from "../../services/actions/actions";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";
import { MOVE_CONSTRUCTOR_ITEM } from "../../services/actions/actions";

function BurgerConstructorElem(props) {
  const { type, burgerConstructorElemData, index } = props;
  const dispatch = useDispatch();
  function handleClose() {
    dispatch({
      type: REMOVE_CONSTRUCTOR_ITEM,
      index: index,
    });
  }
  // const [{ isDrag }, dragRef] = useDrag({
  // type: "card",
  //  item: { burgerConstructorElemData },
  //  collect: (monitor) => ({
  //   isDrag: monitor.isDragging(),
  //  }),
  // });

  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    type: "card-list",
    item: () => {
      return { burgerConstructorElemData, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ handlerId }, drop] = useDrop({
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
        payload: { dragIndex, hoverIndex },
      });
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  return (
    !isDragging && (
      <div
        ref={ref}
        data-handler-id={handlerId}
        className={`${styles["burger-constructor-elem"]} m-4`}
      >
        <DragIcon type="primary" />

        <ConstructorElement
          text={burgerConstructorElemData?.name}
          price={burgerConstructorElemData?.price}
          thumbnail={burgerConstructorElemData?.image}
          type={type}
          isLocked={props.locked}
          handleClose={handleClose}
        />
      </div>
    )
  );
}

BurgerConstructorElem.propTypes = {
  burgerConstructorElemData: PropTypes.shape(burgerType),
  type: PropTypes.string,
};

BurgerConstructorElem.defaultProps = {
  burgerConstructorElemData: {
    calories: 0,
    carbohydrates: 0,
    fat: 0,
    image: "",
    image_large: "",
    image_mobile: "",
    name: "Placeholder",
    price: 0,
    proteins: 0,
    type: "bun",
    __v: 0,
    _id: 0,
  },
};

export default BurgerConstructorElem;
