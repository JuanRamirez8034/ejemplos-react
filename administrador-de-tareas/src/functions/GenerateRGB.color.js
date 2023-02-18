export class RGB_Generator{

  color_scale = 255;

  constructor(color_scale){
    this.color_scale = color_scale;
  }


  numAleatorio = (minimo = 0, maximo = 180) => {
  const min = Math.ceil(minimo);
  const max = Math.floor(maximo);
  return Math.floor(Math.random() * (max - min) + min);
  }

  rgb(transparent={active:false, opacy:100}){
    let color = transparent.active ? 'rgba(' : 'rgb(';

    color += `${this.numAleatorio(this.color_scale)},${this.numAleatorio(this.color_scale)},${this.numAleatorio(this.color_scale)}`;

    color += transparent.active ? `,${(transparent.opacy * 0.1)})` : ')';

    return color;
  }

}