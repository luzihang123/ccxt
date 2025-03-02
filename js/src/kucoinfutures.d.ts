import kucoin from './abstract/kucoinfutures.js';
import { Int, OrderSide, OrderType, OHLCV, Order, Trade, FundingRateHistory, FundingHistory, Balances, Str, Ticker, OrderBook, Transaction, Strings } from './base/types.js';
export default class kucoinfutures extends kucoin {
    describe(): any;
    fetchStatus(params?: {}): Promise<{
        status: string;
        updated: any;
        eta: any;
        url: any;
        info: any;
    }>;
    fetchMarkets(params?: {}): Promise<any[]>;
    fetchTime(params?: {}): Promise<number>;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    parseOHLCV(ohlcv: any, market?: any): OHLCV;
    fetchDepositAddress(code: string, params?: {}): Promise<{
        info: any;
        currency: any;
        address: string;
        tag: string;
        network: string;
    }>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    fetchL3OrderBook(symbol: string, limit?: Int, params?: {}): Promise<void>;
    fetchTicker(symbol: string, params?: {}): Promise<Ticker>;
    parseTicker(ticker: any, market?: any): Ticker;
    fetchFundingHistory(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<FundingHistory[]>;
    fetchPosition(symbol: string, params?: {}): Promise<import("./base/types.js").Position>;
    fetchPositions(symbols?: Strings, params?: {}): Promise<import("./base/types.js").Position[]>;
    parsePosition(position: any, market?: any): import("./base/types.js").Position;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: any, price?: any, params?: {}): Promise<Order>;
    cancelOrder(id: string, symbol?: Str, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: Str, params?: {}): Promise<any>;
    addMargin(symbol: string, amount: any, params?: {}): Promise<any>;
    parseMarginModification(info: any, market?: any): {
        info: any;
        direction: any;
        mode: string;
        amount: any;
        code: any;
        symbol: any;
        status: any;
    };
    fetchOrdersByStatus(status: any, symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchClosedOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOrder(id?: any, symbol?: Str, params?: {}): Promise<Order>;
    parseOrder(order: any, market?: any): Order;
    fetchFundingRate(symbol: string, params?: {}): Promise<{
        info: any;
        symbol: any;
        markPrice: any;
        indexPrice: any;
        interestRate: any;
        estimatedSettlePrice: any;
        timestamp: any;
        datetime: any;
        fundingRate: number;
        fundingTimestamp: any;
        fundingDatetime: any;
        nextFundingRate: any;
        nextFundingTimestamp: any;
        nextFundingDatetime: any;
        previousFundingRate: number;
        previousFundingTimestamp: number;
        previousFundingDatetime: string;
    }>;
    parseBalance(response: any): Balances;
    fetchBalance(params?: {}): Promise<Balances>;
    transfer(code: string, amount: any, fromAccount: any, toAccount: any, params?: {}): Promise<any>;
    parseTransfer(transfer: any, currency?: any): {
        id: string;
        timestamp: number;
        datetime: string;
        currency: any;
        amount: any;
        fromAccount: any;
        toAccount: any;
        status: string;
        info: any;
    };
    parseTransferStatus(status: any): string;
    fetchMyTrades(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    parseTrade(trade: any, market?: any): Trade;
    fetchDeposits(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    fetchWithdrawals(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    fetchMarketLeverageTiers(symbol: string, params?: {}): Promise<any[]>;
    parseMarketLeverageTiers(info: any, market?: any): any[];
    fetchFundingRateHistory(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<FundingRateHistory[]>;
    parseFundingRateHistory(info: any, market?: any): {
        info: any;
        symbol: any;
        fundingRate: number;
        timestamp: number;
        datetime: string;
    };
}
