import { Template } from 'meteor/templating';
import  { $ } from 'meteor/jquery';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.myPage.onCreated(function helloOnCreated() {
  // this.isOpenModal = new ReactiveVar(false);
});

Template.myPage.helpers({
    // isOpenModal() {
    //   return Template.instance().isOpenModal.get();
    // },
    pageTitle(){
      return "Hello world!";
    },
    posts(){
      return [{
            title: "Hello 1",
            content: "Ahihi 1"
          },{
            title: "Hello 2",
            content: "Ahihi 2"
          },{
            title: "Hello 3",
            content: "Ahihi 3"
          }
      ];
    },
    urls(){
        return [
            "https://forums.meteor.com/t/patterns-and-practices-for-passing-data-between-templates/2951",
            "https://www.youtube.com/watch?v=Q2_Wt_cd6aM",
            "https://www.youtube.com/watch?v=Q2_Wt_cd6aM",
            "https://www.youtube.com/watch?v=Q2_Wt_cd6aM",
        ];
    }
});

Template.myPage.events({
  'click #openModal1'(event, instance) {
      $('#myModal').modal('show');
  },
});
