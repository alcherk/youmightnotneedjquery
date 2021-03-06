function outerWidth(el, includeMargin){
  var height = el.offsetWidth;

  if(includeMargin){
    var style = el.currentStyle || getComputedStyle(el);
    height += parseInt(style.marginLeft) + parseInt(style.marginRight);
  } 
  return height;
}

outerWidth(el, true);
