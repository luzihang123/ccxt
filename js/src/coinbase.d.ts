import Exchange from './abstract/coinbase.js';
import { Int, OrderSide, OrderType, Order, Trade, OHLCV, Ticker, OrderBook, Str, Transaction, Balances, Tickers, Strings } from './base/types.js';
/**
 * @class coinbase
 * @extends Exchange
 */
export default class coinbase extends Exchange {
    describe(): any;
    fetchTime(params?: {}): Promise<number>;
    fetchAccounts(params?: {}): Promise<any>;
    fetchAccountsV2(params?: {}): Promise<any>;
    fetchAccountsV3(params?: {}): Promise<any>;
    parseAccount(account: any): {
        id: string;
        type: string;
        code: any;
        info: any;
    };
    createDepositAddress(code: string, params?: {}): Promise<{
        currency: string;
        tag: string;
        address: string;
        info: any;
    }>;
    fetchMySells(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchMyBuys(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchTransactionsWithMethod(method: any, code?: Str, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchWithdrawals(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    fetchDeposits(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    parseTransactionStatus(status: any): string;
    parseTransaction(transaction: any, market?: any): {
        info: any;
        id: string;
        txid: string;
        timestamp: number;
        datetime: string;
        network: any;
        address: any;
        addressTo: any;
        addressFrom: any;
        tag: any;
        tagTo: any;
        tagFrom: any;
        type: string;
        amount: number;
        currency: any;
        status: string;
        updated: number;
        fee: {
            cost: number;
            currency: any;
        };
    };
    parseTrade(trade: any, market?: any): Trade;
    fetchMarkets(params?: {}): Promise<any>;
    fetchMarketsV2(params?: {}): Promise<any[]>;
    fetchMarketsV3(params?: {}): Promise<any[]>;
    fetchCurrenciesFromCache(params?: {}): Promise<any>;
    fetchCurrencies(params?: {}): Promise<{}>;
    fetchTickers(symbols?: Strings, params?: {}): Promise<Tickers>;
    fetchTickersV2(symbols?: Strings, params?: {}): Promise<import("./base/types.js").Dictionary<Ticker>>;
    fetchTickersV3(symbols?: Strings, params?: {}): Promise<import("./base/types.js").Dictionary<Ticker>>;
    fetchTicker(symbol: string, params?: {}): Promise<Ticker>;
    fetchTickerV2(symbol: string, params?: {}): Promise<Ticker>;
    fetchTickerV3(symbol: string, params?: {}): Promise<Ticker>;
    parseTicker(ticker: any, market?: any): Ticker;
    parseBalance(response: any, params?: {}): Balances;
    fetchBalance(params?: {}): Promise<Balances>;
    fetchLedger(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseLedgerEntryStatus(status: any): string;
    parseLedgerEntryType(type: any): string;
    parseLedgerEntry(item: any, currency?: any): {
        info: any;
        id: string;
        timestamp: number;
        datetime: string;
        direction: any;
        account: any;
        referenceId: any;
        referenceAccount: any;
        type: string;
        currency: any;
        amount: number;
        before: any;
        after: any;
        status: string;
        fee: any;
    };
    findAccountId(code: any): Promise<any>;
    prepareAccountRequest(limit?: Int, params?: {}): {
        account_id: string;
    };
    prepareAccountRequestWithCurrencyCode(code?: Str, limit?: Int, params?: {}): Promise<{
        account_id: string;
    }>;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: any, price?: any, params?: {}): Promise<Order>;
    parseOrder(order: any, market?: any): Order;
    parseOrderStatus(status: any): string;
    parseOrderType(type: any): string;
    parseTimeInForce(timeInForce: any): string;
    cancelOrder(id: string, symbol?: Str, params?: {}): Promise<any>;
    cancelOrders(ids: any, symbol?: Str, params?: {}): Promise<Order[]>;
    fetchOrder(id: string, symbol?: Str, params?: {}): Promise<Order>;
    fetchOrders(symbol?: Str, since?: Int, limit?: number, params?: {}): Promise<Order[]>;
    fetchOrdersByStatus(status: any, symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOpenOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchClosedOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchCanceledOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    parseOHLCV(ohlcv: any, market?: any): OHLCV;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchMyTrades(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    fetchBidsAsks(symbols?: Strings, params?: {}): Promise<import("./base/types.js").Dictionary<Ticker>>;
    sign(path: any, api?: any[], method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
