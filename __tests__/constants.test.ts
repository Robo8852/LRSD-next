import {
  DUMPSTER_SIZES, SERVICES, SERVICE_AREAS, TESTIMONIALS,
} from '@/lib/constants'

describe('DUMPSTER_SIZES', () => {
  it('has exactly 3 sizes with correct ids', () => {
    expect(DUMPSTER_SIZES).toHaveLength(3)
    expect(DUMPSTER_SIZES.map(s => s.id)).toEqual(['10yd','20yd','30yd'])
  })
  it('has correct starting prices', () => {
    expect(DUMPSTER_SIZES.find(s => s.id === '10yd')?.price).toBe('Starting at $350')
    expect(DUMPSTER_SIZES.find(s => s.id === '20yd')?.price).toBe('Starting at $450')
    expect(DUMPSTER_SIZES.find(s => s.id === '30yd')?.price).toBe('Starting at $550')
  })
})

describe('SERVICES', () => {
  it('has exactly 6 titles in source order', () => {
    expect(SERVICES.map(s => s.title)).toEqual([
      'Dumpster Rental','Junk Removal','Property Demolition',
      'Paver and Concrete','Residential Clean Outs','Disaster Relief',
    ])
  })
})

describe('SERVICE_AREAS', () => {
  it('lists all 8 Gulf Coast cities in source order', () => {
    expect(SERVICE_AREAS).toEqual([
      'Tampa','St. Petersburg','Clearwater','Sarasota',
      'Bradenton','Fort Myers','Naples','Venice',
    ])
  })
})

describe('TESTIMONIALS', () => {
  it('has both testimonials with 5-star ratings', () => {
    expect(TESTIMONIALS).toHaveLength(2)
    expect(TESTIMONIALS[0].name).toBe('Sarah Jenkins')
    expect(TESTIMONIALS[0].location).toBe('St. Petersburg')
    expect(TESTIMONIALS[1].name).toBe('Mike Thompson')
    expect(TESTIMONIALS[1].location).toBe('Tampa')
    for (const t of TESTIMONIALS) expect(t.rating).toBe(5)
  })
})
