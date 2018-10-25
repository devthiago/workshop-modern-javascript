export const dispatch = (eventName, data) => document.dispatchEvent(new CustomEvent(eventName, {
  bubbles: true,
  detail: data
}))

export const listen = (eventName, callback) => document.addEventListener(eventName, callback)
