import { KayttajatModule } from './kayttajat.module';

describe('KayttajatModule', () => {
  let kayttajatModule: KayttajatModule;

  beforeEach(() => {
    kayttajatModule = new KayttajatModule();
  });

  it('should create an instance', () => {
    expect(kayttajatModule).toBeTruthy();
  });
});
