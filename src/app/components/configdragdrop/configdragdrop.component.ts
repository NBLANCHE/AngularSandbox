import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { DragulaDNDService } from '../../services/dragula-dnd.service';
import { DragulaModule, DragulaService } from 'ng2-dragula/ng2-dragula';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-configdragdrop',
  templateUrl: './configdragdrop.component.html',
  styleUrls: ['./configdragdrop.component.css']
})
export class ConfigdragdropComponent implements OnInit {
  configsbind = '';
  configdb: any;
  configsArray: any;



  name:string;
  tasks:any;
  tasks2:any;
  transferData: any;
  @ViewChild('bag1') bag1: any;
  @ViewChild('bag2') bag2: any;

  constructor(private dragulaSerivce: DragulaService, private dbService: DbService) {
    let that = this;
    this.tasks = [{name: 'Dummy One', id: 0 },{name: 'Dummy Two', id: 1 },{name: 'Dummy Three', id: 3 },{name: 'Dummy Four', id: 4 }];
    this.tasks2 = [{name: 'Dummy Five', id: 5 },{name: 'Dummy Six', id: 6 },{name: 'Dummy Seven', id: 7 },{name: 'Dummy Eight', id: 8 }];
    
    console.log(that);
    console.log(this);
      dragulaSerivce.dropModel.subscribe((args: any) => {
          console.log(args)
          let [bagName, el, source, target] = args;
          if(this.bag1.nativeElement === target){ // needed since dropModel triggers for all bags, not only on the dropped bag
            let transferData:any = {
              taskId: el.dataset.id,
              oldLabelId: source.dataset.id,
              newLabelId: target.dataset.id,
              oldIndex: el.dataset.index
          }

          for(let i = 0; i < that.tasks2.length; i++){
            let task = that.tasks2[i];
              if(task.id == transferData.taskId){
                  transferData.newIndex = i;
                  that.transferData = transferData;
                  break;
              }
          }
        }
      });

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
    dragulaSerivce.setOptions('first-bag', {removeOnSpill: true, copy: true});

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
    // console.log("line 0");
    // console.log(e);;
    // console.log("line 1");
    // console.log(el);
    // console.log("line 2");
    // console.log(args);
    this.removeClass(el, 'ex-over');
  }

  private getElementIndex(el: any) {
    return [].slice.call(el.parentElement.children).indexOf(el);
  }
  ngOnInit() {
    // console.log(this.dbService.configs);
    this.configsbind = this.dbService.getConfigId();
    this.configdb = this.dbService.getConfigDB();
    this.configsArray = this.dbService.configs;
  }


}
