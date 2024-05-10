interface CarouselDataItem {
    src: string;
    alt: string;
    description: string,
    badges:string[],
  }
  
  interface CarouselTemplateProps {
    carouselData: CarouselDataItem[][];
  }

  interface CardProps {
    img: string,
    title: string,
    description: string,
    link: string,
}