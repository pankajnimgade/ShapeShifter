import * as paper from 'paper';

import { Gesture } from './Gesture';

/**
 * A gesture that can be used to create/delete handles for a given segment.
 */
export class CreateOrDeleteSegmentHandlesGesture extends Gesture {
  constructor(private readonly segment: paper.Segment) {
    super();
  }

  onMouseDown(event: paper.ToolEvent) {
    if (this.segment.hasHandles()) {
      this.segment.clearHandles();
    } else {
      this.segment.smooth();
    }
  }
}