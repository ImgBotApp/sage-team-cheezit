import {Component, Inject, OnInit} from '@angular/core';
import {DeckService} from "../deck/deck.service";
import {MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from "@angular/material";

@Component({
    selector: 'app-rename-deck-dialog',
    templateUrl: '.rename-deck-dialog.component.html',
    styleUrls: ['./rename-deck-dialog.component.css']
})
export class RenameDeckDialogComponent implements OnInit{

    newDeckId:string;

    constructor(public deckService: DeckService,
                public matDialogRef: MatDialogRef<RenameDeckDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: {deckId:string},
                public snackBar: MatSnackBar) {
        console.log("construcing RenameDeckDialogComponent");
        console.log(data);
        this.newDeckId = data.deckId;
    }
    ngOnInit(){

    }
    public renameDeck(): void {
        this.deckService.renameDeck(
            this.data.deckId,
            this.newDeckId
        ).then(
            succeeded => {
                this.snackBar.open("Renamed deck", null, {
                    duration: 2000,
                });
            },
            err => {
                console.log(err);
                this.snackBar.open("Error renaming deck", null, {
                    duration: 2000,
                });
            }
        )

    }

}
