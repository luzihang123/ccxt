import Exchange from './abstract/kucoin.js';
import { Int, OrderSide, OrderType, Order, OHLCV, Trade, Balances, OrderRequest, Str, Transaction, Ticker, OrderBook, Tickers, Strings } from './base/types.js';
/**
 * @class kucoin
 * @extends Exchange
 */
export default class kucoin extends Exchange {
    describe(): any;
    nonce(): number;
    fetchTime(params?: {}): Promise<number>;
    fetchStatus(params?: {}): Promise<{
        status: string;
        updated: any;
        eta: any;
        url: any;
        info: any;
    }>;
    fetchMarkets(params?: {}): Promise<any[]>;
    fetchCurrencies(params?: {}): Promise<{}>;
    fetchAccounts(params?: {}): Promise<any[]>;
    fetchTransactionFee(code: string, params?: {}): Promise<{
        info: any;
        withdraw: {};
        deposit: {};
    }>;
    fetchDepositWithdrawFee(code: string, params?: {}): Promise<{
        info: any;
        withdraw: {
            fee: any;
            percentage: any;
        };
        deposit: {
            fee: any;
            percentage: any;
        };
        networks: {};
    }>;
    parseDepositWithdrawFee(fee: any, currency?: any): {
        info: any;
        withdraw: {
            fee: any;
            percentage: any;
        };
        deposit: {
            fee: any;
            percentage: any;
        };
        networks: {};
    };
    isFuturesMethod(methodName: any, params: any): boolean;
    parseTicker(ticker: any, market?: any): Ticker;
    fetchTickers(symbols?: Strings, params?: {}): Promise<Tickers>;
    fetchTicker(symbol: string, params?: {}): Promise<Ticker>;
    parseOHLCV(ohlcv: any, market?: any): OHLCV;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    createDepositAddress(code: string, params?: {}): Promise<{
        info: any;
        currency: any;
        address: string;
        tag: string;
        network: string;
    }>;
    fetchDepositAddress(code: string, params?: {}): Promise<{
        info: any;
        currency: any;
        address: string;
        tag: string;
        network: string;
    }>;
    parseDepositAddress(depositAddress: any, currency?: any): {
        info: any;
        currency: any;
        address: string;
        tag: string;
        network: string;
    };
    fetchDepositAddressesByNetwork(code: string, params?: {}): Promise<{}>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    handleTriggerPrices(params: any): any[];
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: any, price?: any, params?: {}): Promise<Order>;
    createOrders(orders: OrderRequest[], params?: {}): Promise<Order[]>;
    createOrderRequest(symbol: string, type: OrderType, side: OrderSide, amount: any, price?: any, params?: {}): any;
    editOrder(id: string, symbol: any, type: any, side: any, amount?: any, price?: any, params?: {}): Promise<Order>;
    cancelOrder(id: string, symbol?: Str, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: Str, params?: {}): Promise<any>;
    fetchOrdersByStatus(status: any, symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchClosedOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOpenOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOrder(id: string, symbol?: Str, params?: {}): Promise<Order>;
    parseOrder(order: any, market?: any): Order;
    fetchOrderTrades(id: string, symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchMyTrades(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    parseTrade(trade: any, market?: any): Trade;
    fetchTradingFee(symbol: string, params?: {}): Promise<{
        info: any;
        symbol: any;
        maker: number;
        taker: number;
        percentage: boolean;
        tierBased: boolean;
    }>;
    withdraw(code: string, amount: any, address: any, tag?: any, params?: {}): Promise<Transaction>;
    parseTransactionStatus(status: any): string;
    parseTransaction(transaction: any, currency?: any): Transaction;
    fetchDeposits(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    fetchWithdrawals(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    parseBalanceHelper(entry: any): import("./base/types.js").Balance;
    fetchBalance(params?: {}): Promise<Balances>;
    transfer(code: string, amount: any, fromAccount: any, toAccount: any, params?: {}): Promise<{
        id: string;
        currency: any;
        timestamp: number;
        datetime: string;
        amount: number;
        fromAccount: string;
        toAccount: string;
        status: string;
        info: any;
    }>;
    parseTransfer(transfer: any, currency?: any): {
        id: string;
        currency: any;
        timestamp: number;
        datetime: string;
        amount: number;
        fromAccount: string;
        toAccount: string;
        status: string;
        info: any;
    };
    parseTransferStatus(status: any): string;
    parseLedgerEntryType(type: any): string;
    parseLedgerEntry(item: any, currency?: any): {
        id: string;
        direction: string;
        account: string;
        referenceId: any;
        referenceAccount: string;
        type: string;
        currency: any;
        amount: number;
        timestamp: number;
        datetime: string;
        before: any;
        after: any;
        status: any;
        fee: any;
        info: any;
    };
    fetchLedger(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<any>;
    calculateRateLimiterCost(api: any, method: any, path: any, params: any, config?: {}): any;
    parseBorrowRateHistory(response: any, code: any, since: any, limit: any): any;
    parseBorrowRate(info: any, currency?: any): {
        currency: any;
        rate: number;
        period: number;
        timestamp: string;
        datetime: string;
        info: any;
    };
    fetchBorrowInterest(code?: Str, symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<any[]>;
    parseBorrowInterest(info: any, market?: any): {
        symbol: string;
        marginMode: string;
        currency: any;
        interest: any;
        interestRate: number;
        amountBorrowed: any;
        timestamp: number;
        datetime: string;
        info: any;
    };
    borrowMargin(code: string, amount: any, symbol?: Str, params?: {}): Promise<{
        id: string;
        currency: any;
        amount: number;
        symbol: any;
        timestamp: number;
        datetime: string;
        info: any;
    }>;
    repayMargin(code: string, amount: any, symbol?: Str, params?: {}): Promise<{
        id: string;
        currency: any;
        amount: number;
        symbol: any;
        timestamp: number;
        datetime: string;
        info: any;
    }>;
    parseMarginLoan(info: any, currency?: any): {
        id: string;
        currency: any;
        amount: number;
        symbol: any;
        timestamp: number;
        datetime: string;
        info: any;
    };
    fetchDepositWithdrawFees(codes?: Strings, params?: {}): Promise<any>;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: any;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
