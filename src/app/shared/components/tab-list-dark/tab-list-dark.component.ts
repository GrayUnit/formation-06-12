import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab-list-dark',
  templateUrl: './tab-list-dark.component.html',
  styleUrls: ['./tab-list-dark.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabListDarkComponent implements OnInit {
  @Input() headers: string[] = [];
  @Input() counter!: Observable<any>;
  public count!: number;
  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.counter.subscribe(
      (data) => {
        
        this.count = data.nombre;
        // Inscrit pour la prochaine détection du changement
        // this.cd.markForCheck();

        // Lance la detection
        // this.cd.detectChanges();

        // Méthode "brutale" qui empeche le rechargement de données coté ui
        // pour le composant et tous ses enfants
        //this.cd.detach();
      }
    )
  }

  public refresh() {
    // Permet de se réattacher (avec tous ses enfants) suite à un detach.
    this.cd.reattach();
  }
  
  public check() {
    console.log("CD Table");
  }

}
