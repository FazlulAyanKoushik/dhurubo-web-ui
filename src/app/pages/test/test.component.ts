import {Component, OnDestroy, OnInit} from '@angular/core';
import {BulkSmsService} from "../../services/bulk-sms.service";
import {BulkSms} from "../../interfaces/bulk-sms";
import {StorageService} from "../../services/storage.service";
import {SecretKeyTypeEnum} from "../../enum/secret-key-type.enum";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnDestroy {


  constructor(
    protected bulkSmsService: BulkSmsService,
    protected storageService: StorageService,
  ) {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

  /**
   * SENT SMS
   */
  public sendSmsBySslAPi() {
    const messageBody: BulkSms = {
      sms: 'This is test sms',
      csmsid: '8801773253900',
      msisdn: '8801773253900'
    };
    this.bulkSmsService.sendSmsBySslAPi(messageBody)
      .subscribe(res => {
        // console.log(res);
      }, error => {
        console.log(error);
      });
  }

  public testMe() {
    const gg = this.storageService.encryptStringWithCrypto('This is my text', SecretKeyTypeEnum.USER_TOKEN);
    // console.log(gg);
    const gg2 = this.storageService.decryptStringWithCrypto(gg, SecretKeyTypeEnum.USER_TOKEN);
    // console.log(gg2);
  }

  public testMe2() {

  }

}

