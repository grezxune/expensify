import moment from 'moment';
import { 
    setStartDate,
    setEndDate,
    setTextFilter,
    sortByDate,
    sortByAmount
} from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set and date action object', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate object with filter as given value', () => {
    const action = setTextFilter('tommy is awesome');

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'tommy is awesome'
    });
});

test('should generate object with text as default value', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate action object for sort by amount', () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    });
});

test('should generate action object for sort by date', () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    });
});