import { DancesModule } from './dances.module';

describe('DancesModule', () => {
  let dancesModule: DancesModule;

  beforeEach(() => {
    dancesModule = new DancesModule();
  });

  it('should create an instance', () => {
    expect(dancesModule).toBeTruthy();
  });
});
