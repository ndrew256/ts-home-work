interface Entity {
  readonly id?: string;
  readonly name?: string;
  readonly age?: number;
  readonly ethnicity?: string;
  }
  
  type excludeReadOnly<T> = { -readonly [P in keyof T]: T[P] };
  
  type excludeOptionalProperty<T> = {
    [P in keyof Required<T>]: T[P];
  };
  
  type excludeIdAndEthnicity = Pick<Entity, 'name' | 'age'>
  
  type convertToBoolean<T> = {
    [P in keyof T]: boolean;
  };
  
  let first: excludeReadOnly<Entity> = {
      id: '1',
      name: 'John',
      age: 20,
      ethnicity: 'ru'
  }
  
  first.ethnicity = 'ro' // now we can change the property
  console.log(first);
  
  let second: excludeOptionalProperty<Entity> = {
      id: '2',
      name: 'Peter',
      age: 21,
      ethnicity: 'ru'
      //error: missing property 'id'
  }
  
  let third: excludeIdAndEthnicity = {
      name: 'Conor',
      age: 23
      // property id & ethnicity are not available now
  }
  
  let fourth: convertToBoolean<Entity> = {
      name: true,
      age: true,
  }
  console.log(fourth);