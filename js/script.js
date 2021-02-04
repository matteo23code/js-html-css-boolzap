new Vue({
  el: '#app',
   data: {
     chatText: '',
     searchText: '',
     avatarIDX: 0,
     utente: '_io',
     nameIo: 'Fulvia',
    contacts: [
        {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
              {
              date: '10/01/2020 15:30:55',
              text: 'Hai portato a spasso il cane?',
              status: 'sent'
              },
              {
              date: '10/01/2020 15:50:00',
              text: 'Ricordati di dargli da mangiare',
              status: 'sent'
              },
              {
              date: '10/01/2020 16:15:22',
              text: 'Tutto fatto!',
              status: 'received'
              }
        ],
    },
    {
    name: 'Fabio',
    avatar: '_2',
    visible: true,
    messages: [
          {
          date: '20/03/2020 16:30:00',
          text: 'Ciao come stai?',
          status: 'sent'
          },
          {
          date: '20/03/2020 16:30:55',
          text: 'Bene grazie! Stasera ci vediamo?',
          status: 'received'
          },
          {
          date: '20/03/2020 16:35:00',
          text: 'Mi piacerebbe ma devo andare a fare la spesa.',
          status: 'sent'
          }
    ],
},
    {
    name: 'Samuele',
    avatar: '_3',
    visible: true,
    messages: [
          {
          date: '28/03/2020 10:10:40',
          text: 'La Marianna va in campagna',
          status: 'received'
          },
          {
          date: '28/03/2020 10:20:10',
          text: 'Sicuro di non aver sbagliato chat?',
          status: 'sent'
          },
          {
          date: '28/03/2020 16:15:22',
          text: 'Ah scusa!',
          status: 'received'
          }
    ],
},
    {
    name: 'Luisa',
    avatar: '_4',
    visible: true,
    messages: [
        {
        date: '10/01/2020 15:30:55',
        text: 'Lo sai che ha aperto una nuova pizzeria?',
        status: 'sent'
        },
        {
        date: '10/01/2020 15:50:00',
        text: 'Si, ma preferirei andare al cinema',
        status: 'received'
        }
    ],
},
{
name: 'Flavio',
avatar: '_5',
visible: true,
messages: [
      {
      date: '28/03/2020 10:10:40',
      text: 'La Marianna va in campagna',
      status: 'received'
      },
      {
      date: '28/03/2020 10:20:10',
      text: 'Sicuro di non aver sbagliato chat?',
      status: 'sent'
      },
      {
      date: '28/03/2020 16:15:22',
      text: 'Ah scusa!',
      status: 'received'
      }
],
},
{
name: 'Enrica',
avatar: '_6',
visible: true,
messages: [
      {
      date: '28/03/2020 10:10:40',
      text: 'La Marianna va in campagna',
      status: 'received'
      },
      {
      date: '28/03/2020 10:20:10',
      text: 'Sicuro di non aver sbagliato chat?',
      status: 'sent'
      },
      {
      date: '28/03/2020 16:15:22',
      text: 'Ah scusa!',
      status: 'received'
      }
],
},
{
name: 'Gennaro',
avatar: '_7',
visible: true,
messages: [
      {
      date: '28/03/2020 10:10:40',
      text: 'La Marianna va in campagna',
      status: 'received'
      },
      {
      date: '28/03/2020 10:20:10',
      text: 'Sicuro di non aver sbagliato chat?',
      status: 'sent'
      },
      {
      date: '28/03/2020 16:15:22',
      text: 'Ah scusa!',
      status: 'received'
      }
],
},
{
name: 'Mario',
avatar: '_8',
visible: true,
messages: [
      {
      date: '28/03/2020 10:10:40',
      text: 'La Marianna va in campagna',
      status: 'received'
      },
      {
      date: '28/03/2020 10:20:10',
      text: 'Sicuro di non aver sbagliato chat?',
      status: 'sent'
      },
      {
      date: '28/03/2020 16:15:22',
      text: 'Ah scusa!',
      status: 'received'
      }
],
},
]},
methods:{
  setActiveContact: function(index) {
    // setta il contatto attivo
    this.avatarIDX = index;
    console.log(this.avatarIDX);
},
// assegno la data all ultimo accesso
lastAccess: function (index) {
  let messages = this.contacts[index].messages
  let lastIndex = messages.length -1
  let lastDate = messages[lastIndex].dateString
  return lastDate;
  console.log(lastDate);
},
currentDate: function() {
  const d = new Date();
  let dateString = d.toLocaleString();
  dateString = dateString.replace(',', '');
  return dateString;
  console.log(this.currentDate);
},
autoReply: function () {
  const reply = {
    date: this.currentDate(),
    text: 'tutto alla grande',
    status: 'received'
  }
  this.contacts[this.avatarIDX].messages.push(reply)
},
sendMessage: function() {
  const newMessageObject = {
    date: this.currentDate(),
    text: this.chatText,
    status: 'sent'
  }
  this.contacts[this.avatarIDX].messages.push(newMessageObject)
  this.chatText = '';


  let that = this;
  setTimeout(function(){
    that.autoReply()
  }, 1000)
  // per fare una funzione di call back devo usare il that.
},
  // creo una funzione per cercare un contatto e verifico che all inserimento di una lettera mi trovi il contatto corrispondente
  // e che mi correga il testo in caso di lettere iniziali in minuscolo.
  search: function () {
    this.contacts.forEach((item) => {
      let userName = item.name.toLowerCase();
      let searchString = this.searchText.toLowerCase();
      if (userName.includes(searchString)) {
        item.visible = true
      }else {
        item.visible = false
      }
      console.log(userName);
      console.log(searchString);
      console.log(item.visible);
    });

  }

  }


});
Vue.config.devtools = true
