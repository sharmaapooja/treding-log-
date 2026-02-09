
export enum MarketType {
  EQUITY = 'Equity',
  FO = 'F&O',
  CRYPTO = 'Crypto',
  FOREX = 'Forex'
}

export enum OrderType {
  BUY = 'Buy',
  SELL = 'Sell'
}

export enum TradeType {
  INTRADAY = 'Intraday',
  DELIVERY = 'Delivery',
  SWING = 'Swing',
  SCALPING = 'Scalping',
  POSITIONAL = 'Positional'
}

export interface TradeRecord {
  id: string;
  date: string;
  symbol: string;
  marketType: MarketType;
  orderType: OrderType;
  tradeType: TradeType;
  quantity: number;
  entryPrice: number;
  exitPrice: number;
  brokerage: number;
  timeframe: string;
  strategy: string;
  remarks: string;
  
  // Calculated fields
  buyValue: number;
  sellValue: number;
  grossPnL: number;
  netPnL: number;
  pnlPercentage: number;
  result: 'PROFIT' | 'LOSS' | 'BREAKEVEN';
}

export interface JournalStats {
  totalTrades: number;
  winningTrades: number;
  losingTrades: number;
  winRatio: number;
  totalProfit: number;
  totalLoss: number;
  netPnL: number;
  avgProfit: number;
  avgLoss: number;
}
