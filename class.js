class ChangeColor {
  constructor(selector, variableChange) {
    this.selector = selector;
    this.variableChange = variableChange;
    this.rootStyles = document.documentElement.style;

    this.selector.addEventListener('change', (e) => {
      this.changeColorByColor(e);
      console.log(e.target.value--);
    });

    this.selector.addEventListener('mousemove', (e) => {
      this.changeColorByColor(e);
    });
  }
  changeColorByColor(e) {
    const value = e.target.value;
    this.rootStyles.setProperty(this.variableChange, value);
  }
}

export default ChangeColor;
