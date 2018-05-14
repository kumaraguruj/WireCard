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
import { HomeComponent } from './home/home.component';
import { CardSummaryComponent } from './card-summary/card-summary.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { SelfServiceComponent } from './self-service/self-service.component';
import { CardTransfersComponent } from './card-transfers/card-transfers.component';
import { DepositsComponent } from './deposits/deposits.component';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { LoansComponent } from './loans/loans.component';
import { FeesWaiversComponent } from './fees-waivers/fees-waivers.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { YearlyReportsComponent } from './yearly-reports/yearly-reports.component';
import { MonthlyReportsComponent } from './monthly-reports/monthly-reports.component';
import { AmChartsModule} from "@amcharts/amcharts3-angular";
import { ProfileInfoComponent } from './profile-info/profile-info.component';



const appRoutes: Routes = [{ path: 'Emps', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'land', component: LaunchComponent},
  { path: 'demographic', component: DemographicComponent},
  // { path: 'summary', component: SummaryComponent},
  { path: 'recentTransactions', component: RecentTransactionsComponent},
  { path: 'listCards', component: ListCardsComponent},
  // { path: 'transactions', component: TransactionsComponent},
  { path: 'selfLimit', component: SelfLimitComponent},
  { path: 'supplementaryLimit', component: SupplementaryLimitComponent},
  // { path: 'statement', component: StatementComponent},
  // { path: 'generatePin', component: GeneratePinComponent},
  { path: 'walletTransfers', component: WalletTransfersComponent},
  { path: 'supplementTransfers', component: SupplementTransfersComponent},
  { path: 'calculateTransfers', component: CalculateTransfersComponent},
  { path: 'Reports', component: ReportsComponent,children:
  [
    {
      path: 'yearlyReports', component: YearlyReportsComponent
    },
    {
      path: 'monthlyReports', component: MonthlyReportsComponent
    }
  ]
},
  { path: 'Signout', component: SignoutComponent},
  { path: 'Home', component: HomeComponent,children:
  [
    {
      path: 'profileInfo', component: ProfileInfoComponent
    },
    {
    path: 'Summary', component: SummaryComponent
    },
    {
      path: 'transactions', component: TransactionsComponent
    },
    {
      path: 'FeesWaivers', component: FeesWaiversComponent
    }
    
]
},
  { path: 'CardSummary', component: CardSummaryComponent,children:
  [
    {
      path: 'Demographic', component: DemographicComponent, outlet:'CardSummary'
    },
    {
    path: 'Summary', component: SummaryComponent, outlet:'CardSummary'
    },
    {
      path: 'FeesWaivers', component: FeesWaiversComponent, outlet:'CardSummary'
    },
    {
      path: 'RecentTransactions', component: RecentTransactionsComponent, outlet:'CardSummary'
    }
    
]},
  { path: 'RecentActivity', component: RecentActivityComponent,children:
  [
    {
      path: 'listCards', component: ListCardsComponent, outlet:'RecentActivity'
    },
    {
    path: 'transactions', component: TransactionsComponent, outlet:'RecentActivity'
    },
    {
      path: 'notifications', component: NotificationsComponent, outlet:'RecentActivity'
    }
]
},
  { path: 'SelfService', component: SelfServiceComponent,children:
  [
    {
      path: 'SelfLimit', component: SelfLimitComponent
    },
    {
    path: 'SupplementaryLimit', component: SupplementaryLimitComponent
    },
    {
      path: 'Statement', component: StatementComponent
    },
    {
      path: 'GeneratePin', component: GeneratePinComponent
    }
]



},
  { path: 'CardTransfers', component: CardTransfersComponent,children:
  [
    {
      path: 'WalletTransfers', component: WalletTransfersComponent
    },
    {
    path: 'SupplementTransfers', component: SupplementTransfersComponent
    },
    {
      path: 'calculateTransfers', component: CalculateTransfersComponent
    }
]},
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
    SignoutComponent,
    HomeComponent,
    CardSummaryComponent,
    RecentActivityComponent,
    SelfServiceComponent,
    CardTransfersComponent,
    DepositsComponent,
    CreditCardsComponent,
    LoansComponent,
    FeesWaiversComponent,
    NotificationsComponent,
    YearlyReportsComponent,
    MonthlyReportsComponent,
    ProfileInfoComponent ,
  
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes),
    AmChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
