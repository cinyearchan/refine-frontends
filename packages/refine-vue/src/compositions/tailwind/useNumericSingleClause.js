import { h } from 'vue-demi';
import BaseNumericSingleClause from '../../components/base/clauses/numeric/base-numeric-single-clause';

export default (props, ClauseComponent) => {
  return () => {
    return h(BaseNumericSingleClause, {
      props: {
        value: props.value,
        ClauseComponent,
      },
    });
  };
};
