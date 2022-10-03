// to allow elements to be clickable
// https://github.com/clauderic/dnd-kit/issues/863#issuecomment-1211211100

import { PointerSensor } from "@dnd-kit/core";

const always = () => true;

export default class CustomPointerSensor extends PointerSensor {
  static activators = [
    {
      eventName: "onPointerDown",
      handler: (
        syntheticEvent,
        { onActivation, isDraggableElement = always }
      ) => {
        const { nativeEvent: event } = syntheticEvent;
        if (!event.isPrimary || event.button !== 0) {
          return false;
        }

        if (!(event.target instanceof HTMLElement)) {
          return false;
        }
        if (!isDraggableElement(event.target)) {
          return false;
        }

        onActivation?.({ event });

        return true;
      },
    },
  ];
}
