function movie(card, ticket, perc) {
   let tickets = ticket, total = card + ticket, num = 0, discount = ticket;
   for (var i = 0; Math.ceil(total) >= tickets; i++) {
     num = i;
     total += discount;
     tickets += ticket;
     discount = discount * perc;
   }
   return num;
};
