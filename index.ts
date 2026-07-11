//abstract
abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
  ) {}
  abstract getSepia(): void;
  getRealTime(): number {
    //some complex calculation
    return 8;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
  ) {
    super(cameraMode, filter, burst);
  }
  getSepia(): void {
    console.log("sepia");
  }
}

const ms = new Instagram("test", "Test", 9);
ms.getRealTime();
