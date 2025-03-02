import Exchange from './abstract/woo.js';
import { Balances, FundingRateHistory, Int, Market, OHLCV, Order, OrderBook, OrderSide, OrderType, Str, Strings, Trade, Transaction } from './base/types.js';
/**
 * @class woo
 * @extends Exchange
 */
export default class woo extends Exchange {
    describe(): any;
    fetchMarkets(params?: {}): Promise<import("./base/types.js").MarketInterface[]>;
    parseMarket(market: any): Market;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    parseTrade(trade: any, market?: any): Trade;
    parseTokenAndFeeTemp(item: any, feeTokenKey: any, feeAmountKey: any): any;
    fetchTradingFees(params?: {}): Promise<{}>;
    fetchCurrencies(params?: {}): Promise<{}>;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: any, price?: any, params?: {}): Promise<Order>;
    editOrder(id: string, symbol: any, type: any, side: any, amount?: any, price?: any, params?: {}): Promise<Order>;
    cancelOrder(id: string, symbol?: Str, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: Str, params?: {}): Promise<any>;
    fetchOrder(id: string, symbol?: Str, params?: {}): Promise<Order>;
    fetchOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    parseTimeInForce(timeInForce: any): string;
    parseOrder(order: any, market?: any): Order;
    parseOrderStatus(status: any): any;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    parseOHLCV(ohlcv: any, market?: any): OHLCV;
    fetchOrderTrades(id: string, symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchMyTrades(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchAccounts(params?: {}): Promise<any[]>;
    parseAccount(account: any): {
        info: any;
        id: string;
        name: string;
        code: any;
        type: string;
    };
    fetchBalance(params?: {}): Promise<Balances>;
    parseBalance(response: any): Balances;
    fetchDepositAddress(code: string, params?: {}): Promise<{
        currency: string;
        address: string;
        tag: string;
        network: string;
        info: any;
    }>;
    getAssetHistoryRows(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<any[]>;
    fetchLedger(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseLedgerEntry(item: any, currency?: any): {
        id: string;
        currency: any;
        account: string;
        referenceAccount: any;
        referenceId: string;
        status: string;
        amount: number;
        before: any;
        after: any;
        fee: any;
        direction: string;
        timestamp: number;
        datetime: string;
        type: string;
        info: any;
    };
    parseLedgerEntryType(type: any): string;
    getCurrencyFromChaincode(networkizedCode: any, currency: any): any;
    fetchDeposits(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    fetchWithdrawals(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    fetchDepositsWithdrawals(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    parseTransaction(transaction: any, currency?: any): Transaction;
    parseTransactionStatus(status: any): string;
    transfer(code: string, amount: any, fromAccount: any, toAccount: any, params?: {}): Promise<{
        id: string;
        timestamp: number;
        datetime: string;
        currency: any;
        amount: number;
        fromAccount: any;
        toAccount: any;
        status: string;
        info: any;
    }>;
    fetchTransfers(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseTransfer(transfer: any, currency?: any): {
        id: string;
        timestamp: number;
        datetime: string;
        currency: any;
        amount: number;
        fromAccount: any;
        toAccount: any;
        status: string;
        info: any;
    };
    parseTransferStatus(status: any): string;
    withdraw(code: string, amount: any, address: any, tag?: any, params?: {}): Promise<Transaction>;
    repayMargin(code: string, amount: any, symbol?: Str, params?: {}): Promise<any>;
    parseMarginLoan(info: any, currency?: any): {
        id: any;
        currency: any;
        amount: any;
        symbol: any;
        timestamp: any;
        datetime: any;
        info: any;
    };
    nonce(): number;
    sign(path: any, section?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: any;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(httpCode: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
    parseIncome(income: any, market?: any): {
        info: any;
        symbol: any;
        code: any;
        timestamp: number;
        datetime: string;
        id: string;
        amount: number;
        rate: number;
    };
    fetchFundingHistory(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").FundingHistory[]>;
    parseFundingRate(fundingRate: any, market?: any): {
        info: any;
        symbol: any;
        markPrice: any;
        indexPrice: any;
        interestRate: number;
        estimatedSettlePrice: any;
        timestamp: number;
        datetime: string;
        fundingRate: number;
        fundingTimestamp: number;
        fundingDatetime: string;
        nextFundingRate: any;
        nextFundingTimestamp: any;
        nextFundingDatetime: any;
        previousFundingRate: number;
        previousFundingTimestamp: number;
        previousFundingDatetime: string;
    };
    fetchFundingRate(symbol: string, params?: {}): Promise<{
        info: any;
        symbol: any;
        markPrice: any;
        indexPrice: any;
        interestRate: number;
        estimatedSettlePrice: any;
        timestamp: number;
        datetime: string;
        fundingRate: number;
        fundingTimestamp: number;
        fundingDatetime: string;
        nextFundingRate: any;
        nextFundingTimestamp: any;
        nextFundingDatetime: any;
        previousFundingRate: number;
        previousFundingTimestamp: number;
        previousFundingDatetime: string;
    }>;
    fetchFundingRates(symbols?: Strings, params?: {}): Promise<any>;
    fetchFundingRateHistory(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<FundingRateHistory[]>;
    fetchLeverage(symbol: string, params?: {}): Promise<{
        info: any;
        leverage: number;
    }>;
    setLeverage(leverage: any, symbol?: Str, params?: {}): Promise<any>;
    fetchPosition(symbol?: Str, params?: {}): Promise<import("./base/types.js").Position>;
    fetchPositions(symbols?: Strings, params?: {}): Promise<import("./base/types.js").Position[]>;
    parsePosition(position: any, market?: any): import("./base/types.js").Position;
    defaultNetworkCodeForCurrency(code: any): any;
    setSandboxMode(enable: any): void;
}
