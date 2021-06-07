import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { faPhoneSquareAlt, faMailBulk} from '@fortawesome/free-solid-svg-icons';
import { ContactMessage } from '../shared/contact-service/contact.model';
import { ContactService } from '../shared/contact-service/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: []
})



export class ContactComponent implements OnInit {

  phoneSquarerAltIcon = faPhoneSquareAlt;
  mailBulkIcon= faMailBulk;
  
  contactForm!: FormGroup;
  sendmessage = false;

  constructor( private formBuilder: FormBuilder, private messageService: ContactService) { }



  ngOnInit(): void{
    this.initForm();
  }


  initForm(): void{
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      message: ['', Validators.required]
    });
  }
  
  onSubmit(): void{
    if(this.contactForm.valid){
      const contactMessage = new ContactMessage(
        this.contactForm.value.name,
        this.contactForm.value.email,
        this.contactForm.value.message
      );

      //Envoyer le message vers le server avec un service
      console.log('nouveau message', contactMessage);
    
      // si c'est true on confirme avec un message d'envoie
      this.messageService.create(contactMessage)
      .subscribe(()=>this.sendmessage = true);
      // on reset le formulaire
      this.contactForm.reset();    
    }
  }
}
  