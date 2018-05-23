import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-trim-sample',
  templateUrl: './trim-sample.component.html',
  styleUrls: ['./trim-sample.component.scss'],
})
export class TrimSampleComponent implements OnInit {

  constructor () {
  }

  readonly fieldA = new FormControl('');
  readonly fieldB = new FormControl('');

  readonly formA = new FormGroup({
    fieldA: this.fieldA,
    fieldB: this.fieldB,
  });

  ngOnInit () {
  }

}
