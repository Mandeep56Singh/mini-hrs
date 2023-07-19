export interface FormDto {
  uuid: string;
  name: string;
  encounterType: {
    uuid: string;
    name: string;
  };
}
