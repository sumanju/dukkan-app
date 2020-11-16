import { NgModule }         from '@angular/core'
import { LayoutModule }     from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule }  from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule }    from '@angular/material/icon'
import { MatListModule }    from '@angular/material/list'
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule}    from  '@angular/material/input'

@NgModule({
  imports : [
    MatToolbarModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports : [ 
    MatToolbarModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
  ]
})

export class MaterialModule { }
