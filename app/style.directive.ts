import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
    selector: '[myStyle]',
    host: {
        '(mouseenter)': 'onMouseOver()',
        '(mouseleave)': 'onMouseLeave()',    
    }
})
export class StyleDirective {
    @Input('myStyle') inlineColor: string;
    private defaultColor = 'orange';
    
    constructor( private el: ElementRef){ }
    
    onMouseOver() { this.colorStyle(this.inlineColor || this.defaultColor);}
    onMouseLeave() { this.colorStyle(null);}
    
    private colorStyle(color: string){
        this.el.nativeElement.style.backgroundColor = color;
    }
}
