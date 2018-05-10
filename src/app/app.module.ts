import { SignoutComponent } from './signout/signout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes,Router} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotComponent  } from './page-not/page-not.component';
import { LaunchComponent} from './launch/launch.component';
import { AccountsComponent } from './accounts/accounts.component';
import { DemographicComponent } from './demographic/demographic.component';
import { SummaryComponent } from './summary/summary.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { ListCardsComponent } from './list-cards/list-cards.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SelfLimitComponent } from './self-limit/self-limit.component';
import { SupplementaryLimitComponent } from './supplementary-limit/supplementary-limit.component';
import { StatementComponent } from './statement/statement.component';
import { GeneratePinComponent } from './generate-pin/generate-pin.component';
import { WalletTransfersComponent } from './wallet-transfers/wallet-transfers.component';
import { SupplementTransfersComponent } from './supplement-transfers/supplement-transfers.component';
import { CalculateTransfersComponent } from './calculate-transfers/calculate-transfers.component';
import { ReportsComponent } from './reports/reports.component';



const appRoutes: Routes = [{ path: 'Emps', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'land', component: LaunchComponent},
  { path: 'accounts', component: AccountsComponent},
  { path: 'demographic', component: DemographicComponent},
  { path: 'summary', component: SummaryComponent},
  { path: 'recentTransactions', component: RecentTransactionsComponent},
  { path: 'listCards', component: ListCardsComponent},
  { path: 'transactions', component: TransactionsComponent},
  { path: 'selfLimit', component: SelfLimitComponent},
  { path: 'supplementaryLimit', component: SupplementaryLimitComponent},
  { path: 'statement', component: StatementComponent},
  { path: 'generatePin', component: GeneratePinComponent},
  { path: 'walletTransfers', component: WalletTransfersComponent},
  { path: 'supplementTransfers', component: SupplementTransfersComponent},
  { path: 'calculateTransfers', component: CalculateTransfersComponent},
  { path: 'Reports', component: ReportsComponent},
  { path: 'Signout', component: SignoutComponent},
  { path: '',redirectTo:'/login', pathMatch: 'full' },
  { path: '**', component: PageNotComponent }  
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LaunchComponent,
    PageNotComponent,
    AccountsComponent,
    DemographicComponent,
    SummaryComponent,
    RecentTransactionsComponent,
    ListCardsComponent,
    TransactionsComponent,
    SelfLimitComponent,
    SupplementaryLimitComponent,
    StatementComponent,
    GeneratePinComponent,
    WalletTransfersComponent,
    SupplementTransfersComponent,
    CalculateTransfersComponent,
    ReportsComponent ,
    SignoutComponent   
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
