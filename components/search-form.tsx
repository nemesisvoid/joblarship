import { academicDropdownLinks, scholarshipDropdownLinks } from '@/constants';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
const SearchForm = () => {
  return (
    <div className='w-full md:w-[75%] lg:w-[50%] z-10'>
      <div className='bg-white mt-10 p-8 lg:p-12 rounded-md'>
        <div className='flex flex-col sm:flex-row  md:items-center gap-10'>
          <div className='relative sm:w-1/2 lg:w-1/3'>
            <Select>
              <label className='absolute -top-2 left-4 bg-white px-1 text-sm text-gray-500 z-10'>Opportunities</label>
              <SelectTrigger className='w-full py-7 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500'>
                <SelectValue placeholder='Select' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Careers</SelectLabel>
                  {academicDropdownLinks.map(link => (
                    <SelectItem
                      key={link.name}
                      value={link.name.toLowerCase()}>
                      {link.name}
                    </SelectItem>
                  ))}
                </SelectGroup>

                <SelectGroup>
                  <SelectLabel>Scholarship</SelectLabel>
                  {scholarshipDropdownLinks.map(link => (
                    <SelectItem
                      key={link.name}
                      value={link.name.toLowerCase()}>
                      {link.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className='relative sm:w-1/2 lg:w-1/3'>
            <Select>
              <label className='absolute -top-2 left-4 bg-white px-1 text-sm text-gray-500 z-10'>Region/Country</label>
              <SelectTrigger className='w-full py-7 px-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500'>
                <SelectValue placeholder='All Countries' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='apple'>Apple</SelectItem>
                <SelectItem value='banana'>Banana</SelectItem>
                <SelectItem value='blueberry'>Blueberry</SelectItem>
                <SelectItem value='grapes'>Grapes</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className='bg-primary-100 text-white text-xl py-7 px-4 sm:w-1/4'>Search</Button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
