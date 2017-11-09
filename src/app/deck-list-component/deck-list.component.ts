import {Component, Input, OnInit, Inject} from '@angular/core';
import {Deck, DeckId} from "../deck/deck";
import {DeckService} from "../deck/deck.service";
import {MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.css']
})
export class DeckListComponent implements OnInit {


    @Input() decks: DeckId[];

    @Input() title: string;

    @Input() canEdit?: boolean;

    @Input() canAdd?: boolean = false;


    id: string;
    deck: Deck;

    constructor(public deckService : DeckService,
                public snackBar: MatSnackBar) {
    }

  ngOnInit() {
      //this.deckService.getDecks();
      //this.deckService.getUserDecks().subscribe(
      //    decks => {
      //        this.decks = decks;
      //    }
      //);

  }

    public deleteDeck(id: string): void {
        this.deckService.deleteDeck(id).then(
            succeeded => {
                this.snackBar.open("Deleted Deck", null, {
                    duration: 2000,
                });
            },
            err => {
                console.log(err);
                this.snackBar.open("Error deleting deck", null, {
                    duration: 2000,
                });
            });
    }


}
