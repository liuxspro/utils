import {
  create_layer,
  create_webmercator_MatrixSet,
  crate_identification,
  create_capabilities,
} from "./wmts.ts";

export class XYZMap {
  public name: string;
  public url: string;
  public zmin: number;
  public zmax: number;
  public referer: string;

  constructor(
    name: string,
    url: string,
    zmin: number = 0,
    zmax: number = 18,
    referer: string = ""
  ) {
    this.name = name;
    this.url = url;
    this.zmin = zmin;
    this.zmax = zmax;
    this.referer = referer;
  }

  public info(): string {
    return `
  Name: ${this.name}
  Url : ${this.url}
  Zmin: ${this.zmin}
  Zmax: ${this.zmax}
  `;
  }

  public as_wmts_layer(): string {
    const url_template = this.url
      .replace(/\{z\}/g, "{TileMatrix}")
      .replace(/\{x\}/g, "{TileCol}")
      .replace(/\{y\}/g, "{TileRow}")
      .replace(/&/g, "&amp;");
    return create_layer(this.name, this.name, this.name, url_template);
  }

  public as_wmts() {
    const identification = crate_identification(this.name, this.name);
    const matrix_set = create_webmercator_MatrixSet(this.zmin, this.zmax);
    return create_capabilities(
      identification,
      this.as_wmts_layer(),
      matrix_set
    );
  }
}
