declare global {
  type Alignment = "center" | "left" | "right" | "justify";

  interface Image {
    src: string;
    blurUrl: string;
    alt?: string;
  }
}

export {};
