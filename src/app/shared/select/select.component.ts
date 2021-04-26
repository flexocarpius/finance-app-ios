import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PickerController } from "@ionic/angular";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() options: string[];
  @Input() selected: string = '';

  @Output() onSelected = new EventEmitter();
  
  constructor(private picker: PickerController) { }

  ngOnInit() {}

  async onClick() {
    const options = this.options.map(o => ({ text: o, value: o, selected: this.selected === o }));
    const pickerElement = await this.picker.create({
      columns: [{ name: this.label, options }],
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text:'Ok',
          handler:(value: any) => {
            this.onSelected.emit(value);
          }
        }
      ],
    });
    return await pickerElement.present();
  }

}
