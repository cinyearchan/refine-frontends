import type { Condition } from "types";

export const optionCondition: Condition = {
  id: "option",
  component: "OptionCondition",
  display: "Option",
  meta: {
    clauses: [
      {
        id: "in",
        component: "OptionInput",
        display: "Is One Of",
        meta: {
          multiple: true,
        },
      },
      {
        id: "eq",
        component: "OptionInput",
        display: "Is",
        meta: {},
      },
      {
        id: "dne",
        component: "OptionInput",
        display: "Is Not",
        meta: {},
      },
      {
        id: "nin",
        component: "OptionInput",
        display: "Is Not One Of",
        meta: {
          multiple: true,
        },
      },
      {
        id: "st",
        display: "Is Set",
        meta: {},
      },
      {
        id: "nst",
        display: "Is Not Set",
        meta: {},
      },
    ],
    options: [
      {
        id: "foo",
        display: "Foo",
      },
      {
        id: "bar",
        display: "Bar",
      },
      {
        id: "foo2",
        display: "Foo2",
      },
      {
        id: "bar2",
        display: "Bar2",
      },
    ],
  },
  refinements: [],
};

export const textCondition: Condition = {
  id: "text",
  component: "TextCondition",
  display: "Text",
  meta: {
    clauses: [
      {
        id: "eq",
        display: "Equals",
        component: "TextInput",
        meta: {},
      },
      {
        id: "dne",
        display: "Does Not Equal",
        component: "TextInput",
        meta: {},
      },
      {
        id: "sw",
        display: "Starts With",
        component: "TextInput",
        meta: {},
      },
      {
        id: "ew",
        display: "Ends With",
        component: "TextInput",
        meta: {},
      },
      {
        id: "dsw",
        display: "Does Not Start With",
        component: "TextInput",
        meta: {},
      },
      {
        id: "dew",
        display: "Does Not End With",
        component: "TextInput",
        meta: {},
      },
      {
        id: "cont",
        display: "Contains",
        component: "TextInput",
        meta: {},
      },
      {
        id: "dcont",
        display: "Does Not Contain",
        component: "TextInput",
        meta: {},
      },
      {
        id: "st",
        display: "Is Set",
        meta: {},
      },
      {
        id: "nst",
        display: "Is Not Set",
        meta: {},
      },
    ],
  },
  refinements: [],
};

export const booleanCondition: Condition = {
  id: "bool",
  component: "BooleanCondition",
  display: "Bool",
  meta: {
    clauses: [
      {
        id: "true",
        display: "Is True",
        meta: {},
      },
      {
        id: "false",
        display: "Is False",
        meta: {},
      },
    ],
  },
  refinements: [],
};

export const dateCondition: Condition = {
  id: "date",
  component: "DateCondition",
  display: "Date",
  meta: {
    clauses: [
      {
        id: "eq",
        display: "Is Equal To",
        component: "DateInput",
        meta: {},
      },
      {
        id: "dne",
        display: "Is Not Equal To",
        component: "DateInput",
        meta: {},
      },
      {
        id: "lte",
        display: "Is On or Before",
        component: "DateInput",
        meta: {},
      },
      {
        id: "gte",
        display: "Is On or After",
        component: "DateInput",
        meta: {},
      },
      {
        id: "btwn",
        display: "Is Between",
        component: "DoubleDateInput",
        meta: {},
      },
      {
        id: "gt",
        display: "Is More Than",
        component: "RelativeDateInput",
        meta: {
          units: [
            { id: "day", display: "Days" },
            { id: "week", display: "Weeks" },
            { id: "month", display: "Months" },
            { id: "year", display: "Years" },
          ],
          modifiers: [
            { id: "ago", display: "Ago" },
            { id: "from_now", display: "From Now" },
          ],
        },
      },
      {
        id: "exct",
        display: "Is Exactly",
        component: "RelativeDateInput",
        meta: {
          units: [
            { id: "day", display: "Days" },
            { id: "week", display: "Weeks" },
            { id: "month", display: "Months" },
            { id: "year", display: "Years" },
          ],
          modifiers: [
            { id: "ago", display: "Ago" },
            { id: "from_now", display: "From Now" },
          ],
        },
      },
      {
        id: "lt",
        display: "Is Less Than",
        component: "RelativeDateInput",
        meta: {
          units: [
            { id: "day", display: "Days" },
            { id: "week", display: "Weeks" },
            { id: "month", display: "Months" },
            { id: "year", display: "Years" },
          ],
          modifiers: [
            { id: "ago", display: "Ago" },
            { id: "from_now", display: "From Now" },
          ],
        },
      },
      {
        id: "st",
        display: "Is Set",
        meta: {},
      },
      {
        id: "nst",
        display: "Is Not Set",
        meta: {},
      },
    ],
  },
  refinements: [],
};

export const dateWithTimeCondition: Condition = {
  id: "date_with_time",
  component: "DateCondition",
  display: "Date With Time",
  meta: {
    clauses: [
      {
        id: "eq",
        display: "Is Equal To",
        component: "DateInput",
        meta: {},
      },
      {
        id: "dne",
        display: "Is Not Equal To",
        component: "DateInput",
        meta: {},
      },
      {
        id: "lte",
        display: "Is On or Before",
        component: "DateInput",
        meta: {},
      },
      {
        id: "gte",
        display: "Is On or After",
        component: "DateInput",
        meta: {},
      },
      {
        id: "btwn",
        display: "Is Between",
        component: "DoubleDateInput",
        meta: {},
      },
      {
        id: "gt",
        display: "Is More Than",
        component: "RelativeDateInput",
        meta: {
          units: [
            { id: "day", display: "Days" },
            { id: "week", display: "Weeks" },
            { id: "month", display: "Months" },
            { id: "year", display: "Years" },
          ],
          modifiers: [
            { id: "ago", display: "Ago" },
            { id: "from_now", display: "From Now" },
          ],
        },
      },
      {
        id: "exct",
        display: "Is Exactly",
        component: "RelativeDateInput",
        meta: {
          units: [
            { id: "day", display: "Days" },
            { id: "week", display: "Weeks" },
            { id: "month", display: "Months" },
            { id: "year", display: "Years" },
          ],
          modifiers: [
            { id: "ago", display: "Ago" },
            { id: "from_now", display: "From Now" },
          ],
        },
      },
      {
        id: "lt",
        display: "Is Less Than",
        component: "RelativeDateInput",
        meta: {
          units: [
            { id: "day", display: "Days" },
            { id: "week", display: "Weeks" },
            { id: "month", display: "Months" },
            { id: "year", display: "Years" },
          ],
          modifiers: [
            { id: "ago", display: "Ago" },
            { id: "from_now", display: "From Now" },
          ],
        },
      },
      {
        id: "st",
        display: "Is Set",
        meta: {},
      },
      {
        id: "nst",
        display: "Is Not Set",
        meta: {},
      },
    ],
  },
  refinements: [],
};

export const numericCondition: Condition = {
  id: "numeric",
  component: "NumericCondition",
  display: "Numeric",
  meta: {
    clauses: [
      {
        id: "eq",
        display: "Is Equal To",
        component: "NumberInput",
        meta: {},
      },
      {
        id: "dne",
        display: "Is Not Equal To",
        component: "NumberInput",
        meta: {},
      },
      {
        id: "gt",
        display: "Is Greater Than",
        component: "NumberInput",
        meta: {},
      },
      {
        id: "gte",
        display: "Is Greater Than Or Equal To",
        component: "NumberInput",
        meta: {},
      },
      {
        id: "lt",
        display: "Is Less Than",
        component: "NumberInput",
        meta: {},
      },
      {
        id: "lte",
        display: "Is Less Than Or Equal To",
        component: "NumberInput",
        meta: {},
      },
      {
        id: "btwn",
        display: "Is Between",
        component: "DoubleNumberInput",
        meta: {},
      },
      {
        id: "nbtwn",
        display: "Is Not Between",
        component: "DoubleNumberInput",
        meta: {},
      },
      {
        id: "st",
        display: "Is Set",
        meta: {},
      },
      {
        id: "nst",
        display: "Is Not Set",
        meta: {},
      },
    ],
  },
  refinements: [],
};
