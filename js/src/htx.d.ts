import Exchange from './abstract/htx.js';
import { Int, OrderSide, OrderType, Order, OHLCV, Trade, FundingRateHistory, Balances, Str, Transaction, Ticker, OrderBook, Tickers, OrderRequest, Strings } from './base/types.js';
/**
 * @class huobi
 * @extends Exchange
 */
export default class htx extends Exchange {
    describe(): any;
    fetchStatus(params?: {}): Promise<{
        status: any;
        updated: any;
        eta: any;
        url: any;
        info: any;
    }>;
    fetchTime(params?: {}): Promise<number>;
    parseTradingFee(fee: any, market?: any): {
        info: any;
        symbol: any;
        maker: number;
        taker: number;
    };
    fetchTradingFee(symbol: string, params?: {}): Promise<{
        info: any;
        symbol: any;
        maker: number;
        taker: number;
    }>;
    fetchTradingLimits(symbols?: Strings, params?: {}): Promise<{}>;
    fetchTradingLimitsById(id: string, params?: {}): Promise<{
        info: any;
        limits: {
            amount: {
                min: number;
                max: number;
            };
        };
    }>;
    parseTradingLimits(limits: any, symbol?: Str, params?: {}): {
        info: any;
        limits: {
            amount: {
                min: number;
                max: number;
            };
        };
    };
    costToPrecision(symbol: any, cost: any): any;
    fetchMarkets(params?: {}): Promise<any[]>;
    fetchMarketsByTypeAndSubType(type: any, subType: any, params?: {}): Promise<any[]>;
    parseTicker(ticker: any, market?: any): Ticker;
    fetchTicker(symbol: string, params?: {}): Promise<Ticker>;
    fetchTickers(symbols?: Strings, params?: {}): Promise<Tickers>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    parseTrade(trade: any, market?: any): Trade;
    fetchOrderTrades(id: string, symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchSpotOrderTrades(id: string, symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchMyTrades(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchTrades(symbol: string, since?: Int, limit?: number, params?: {}): Promise<Trade[]>;
    parseOHLCV(ohlcv: any, market?: any): OHLCV;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    fetchAccounts(params?: {}): Promise<any[]>;
    parseAccount(account: any): {
        info: any;
        id: string;
        type: any;
        code: any;
    };
    fetchAccountIdByType(type: any, marginMode?: any, symbol?: any, params?: {}): Promise<any>;
    fetchCurrencies(params?: {}): Promise<{}>;
    networkIdToCode(networkId: any, currencyCode?: any): string;
    networkCodeToId(networkCode: any, currencyCode?: any): any;
    fetchBalance(params?: {}): Promise<Balances>;
    fetchOrder(id: string, symbol?: Str, params?: {}): Promise<Order>;
    parseMarginBalanceHelper(balance: any, code: any, result: any): any;
    fetchSpotOrdersByStates(states: any, symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchSpotOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchClosedSpotOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchContractOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchClosedContractOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchClosedOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOpenOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    parseOrderStatus(status: any): string;
    parseOrder(order: any, market?: any): Order;
    createSpotOrderRequest(symbol: string, type: OrderType, side: OrderSide, amount: any, price?: any, params?: {}): Promise<any>;
    createContractOrderRequest(symbol: string, type: OrderType, side: OrderSide, amount: any, price?: any, params?: {}): any;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: any, price?: any, params?: {}): Promise<Order>;
    createOrders(orders: OrderRequest[], params?: {}): Promise<Order[]>;
    cancelOrder(id: string, symbol?: Str, params?: {}): Promise<any>;
    cancelOrders(ids: any, symbol?: Str, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: Str, params?: {}): Promise<any>;
    parseDepositAddress(depositAddress: any, currency?: any): {
        currency: any;
        address: string;
        tag: string;
        network: string;
        note: string;
        info: any;
    };
    fetchDepositAddressesByNetwork(code: string, params?: {}): Promise<{}>;
    fetchDepositAddress(code: string, params?: {}): Promise<any>;
    fetchWithdrawAddresses(code: string, note?: any, networkCode?: any, params?: {}): Promise<any[]>;
    fetchDeposits(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    fetchWithdrawals(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    parseTransaction(transaction: any, currency?: any): Transaction;
    parseTransactionStatus(status: any): string;
    withdraw(code: string, amount: any, address: any, tag?: any, params?: {}): Promise<Transaction>;
    parseTransfer(transfer: any, currency?: any): {
        info: any;
        id: string;
        timestamp: any;
        datetime: any;
        currency: any;
        amount: any;
        fromAccount: any;
        toAccount: any;
        status: any;
    };
    transfer(code: string, amount: any, fromAccount: any, toAccount: any, params?: {}): Promise<{
        info: any;
        id: string;
        timestamp: any;
        datetime: any;
        currency: any;
        amount: any;
        fromAccount: any;
        toAccount: any;
        status: any;
    }>;
    fetchBorrowRatesPerSymbol(params?: {}): Promise<{
        info: any;
    }>;
    fetchBorrowRates(params?: {}): Promise<{}>;
    fetchFundingRateHistory(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<FundingRateHistory[]>;
    parseFundingRate(contract: any, market?: any): {
        info: any;
        symbol: any;
        markPrice: any;
        indexPrice: any;
        interestRate: any;
        estimatedSettlePrice: any;
        timestamp: any;
        datetime: any;
        fundingRate: number;
        fundingTimestamp: number;
        fundingDatetime: string;
        nextFundingRate: number;
        nextFundingTimestamp: number;
        nextFundingDatetime: string;
        previousFundingRate: any;
        previousFundingTimestamp: any;
        previousFundingDatetime: any;
    };
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
        fundingTimestamp: number;
        fundingDatetime: string;
        nextFundingRate: number;
        nextFundingTimestamp: number;
        nextFundingDatetime: string;
        previousFundingRate: any;
        previousFundingTimestamp: any;
        previousFundingDatetime: any;
    }>;
    fetchFundingRates(symbols?: Strings, params?: {}): Promise<any>;
    fetchBorrowInterest(code?: Str, symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseBorrowInterest(info: any, market?: any): {
        account: string;
        symbol: string;
        marginMode: string;
        currency: any;
        interest: number;
        interestRate: number;
        amountBorrowed: number;
        timestamp: number;
        datetime: string;
        info: any;
    };
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(httpCode: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
    fetchFundingHistory(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").FundingHistory[]>;
    setLeverage(leverage: any, symbol?: Str, params?: {}): Promise<any>;
    parseIncome(income: any, market?: any): {
        info: any;
        symbol: any;
        code: any;
        timestamp: number;
        datetime: string;
        id: string;
        amount: number;
    };
    parsePosition(position: any, market?: any): import("./base/types.js").Position;
    fetchPositions(symbols?: Strings, params?: {}): Promise<import("./base/types.js").Position[]>;
    fetchPosition(symbol: string, params?: {}): Promise<import("./base/types.js").Position>;
    parseLedgerEntryType(type: any): string;
    parseLedgerEntry(item: any, currency?: any): {
        id: string;
        direction: string;
        account: string;
        referenceId: string;
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
    fetchLeverageTiers(symbols?: Strings, params?: {}): Promise<{}>;
    fetchMarketLeverageTiers(symbol: string, params?: {}): Promise<any>;
    parseLeverageTiers(response: any, symbols?: Strings, marketIdKey?: any): {};
    fetchOpenInterestHistory(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").OpenInterest[]>;
    fetchOpenInterest(symbol: string, params?: {}): Promise<import("./base/types.js").OpenInterest>;
    parseOpenInterest(interest: any, market?: any): import("./base/types.js").OpenInterest;
    borrowMargin(code: string, amount: any, symbol?: Str, params?: {}): Promise<any>;
    repayMargin(code: string, amount: any, symbol?: Str, params?: {}): Promise<any>;
    parseMarginLoan(info: any, currency?: any): {
        id: number;
        currency: any;
        amount: any;
        symbol: any;
        timestamp: number;
        datetime: string;
        info: any;
    };
    fetchSettlementHistory(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchDepositWithdrawFees(codes?: Strings, params?: {}): Promise<any>;
    parseDepositWithdrawFee(fee: any, currency?: any): any;
    parseSettlements(settlements: any, market: any): any[];
    parseSettlement(settlement: any, market: any): {
        info: any;
        symbol: any;
        price: number;
        timestamp: number;
        datetime: string;
    };
    fetchLiquidations(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Liquidation[]>;
    parseLiquidation(liquidation: any, market?: any): import("./base/types.js").Liquidation;
}
