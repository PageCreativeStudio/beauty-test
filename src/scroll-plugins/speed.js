import { ScrollbarPlugin } from 'smooth-scrollbar';

export default class ScaleSpeedPlugin extends ScrollbarPlugin {
  static pluginName = 'speedPlugin';

  static defaultOptions = {
    speed: 1,
  };

  transformDelta(delta) {
    const { speed } = this.options;
    return {
      x: delta.x * speed,
      y: delta.y * speed,
    };
  }
}