import { FaceDetectionNet } from './faceDetectionNet/types';
import { Dimensions, DrawBoxOptions, DrawOptions, DrawTextOptions } from './types';
export declare function isFloat(num: number): boolean;
export declare function round(num: number): number;
export declare function getElement(arg: string | any): any;
export declare function getContext2dOrThrow(canvas: HTMLCanvasElement): CanvasRenderingContext2D;
export declare function createCanvas({width, height}: Dimensions): HTMLCanvasElement;
export declare function createCanvasWithImageData({width, height}: Dimensions, buf: Uint8ClampedArray): HTMLCanvasElement;
export declare function getMediaDimensions(media: HTMLImageElement | HTMLVideoElement): {
    width: number;
    height: number;
};
export declare function bufferToImage(buf: Blob): Promise<HTMLImageElement>;
export declare function getDefaultDrawOptions(): DrawOptions;
export declare function drawBox(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, options: DrawBoxOptions): void;
export declare function drawText(ctx: CanvasRenderingContext2D, x: number, y: number, text: string, options: DrawTextOptions): void;
export declare function drawDetection(canvasArg: string | HTMLCanvasElement, detection: FaceDetectionNet.Detection | FaceDetectionNet.Detection[], options?: DrawBoxOptions & DrawTextOptions & {
    withScore: boolean;
}): void;
