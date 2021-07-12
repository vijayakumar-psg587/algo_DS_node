import { EventType } from 'src/algos/models/types/event.type';
import { Listener } from 'src/algos/models/types/listener-event.type';

export function createObserver<EventType>(): {
  subscribe: (listener: Listener<EventType>) => () => void;
  publish: (ev: EventType) => void;
} {
  let listeners: Listener<EventType>[] = [];

  return {
    subscribe: (listener: Listener<EventType>) => {
      // Make sure to return a method to unsubscribe from the same listener
      listeners.push(listener);
      return () => {
        listeners = listeners.filter((liste) => liste != listener);
      };
    },
    publish: (event: EventType) => {
      // it means u need to publish the event to all the listeners

      listeners.forEach((l) => {
        l(event);
      });
    },
  };
}
