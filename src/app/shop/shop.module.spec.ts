import { ShopModule } from './shop.module';

describe('ShopModule', () => {
  let shopModule: ShopModule;

  beforeEach(() => {
    shopModule = new ShopModule();
  });

  it('should create an instance', () => {
    expect(shopModule).toBeTruthy();
  });
});
