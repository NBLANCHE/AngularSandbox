import { Component, OnInit } from '@angular/core';
import { DragulaDNDService } from '../../services/dragula-dnd.service';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-configdragdrop',
  templateUrl: './configdragdrop.component.html',
  styleUrls: ['./configdragdrop.component.css']
})
export class ConfigdragdropComponent implements OnInit {
  constructor(private dragulaSerivce: DragulaService) {
    dragulaSerivce.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
      console.log("OnDrag");
    });
    dragulaSerivce.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
      console.log("onDrop");
    });
    dragulaSerivce.over.subscribe((value) => {
      this.onOver(value.slice(1));
      console.log("onOver");
    });
    dragulaSerivce.out.subscribe((value) => {
      this.onOut(value.slice(1));
      console.log("onOut");
    });


    dragulaSerivce.setOptions('first-bag', {removeOnSpill:true});

  }
  private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string) {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string) {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }

  private onDrag(args) {
    let [e, el] = args;

    this.removeClass(e, 'ex-moved');
  }

  private onDrop(args) {
    let [e, el] = args;
    this.addClass(e, 'ex-moved');
  }

  private onOver(args) {
    let [e, el, container] = args;
    this.addClass(el, 'ex-over');
  }

  private onOut(args) {
    let [e, el, container] = args;
    console.log("line 0");
    console.log(e);;
    console.log("line 1");
    console.log(el);
    console.log("line 2");
    console.log(args);
    this.removeClass(el, 'ex-over');
  }

  ngOnInit() {
  }

}
