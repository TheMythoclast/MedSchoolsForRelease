import React, { Component } from 'react';
import { SearchProvider, Results, SearchBox, Facet } from "@elastic/react-search-ui";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import { Layout, BooleanFacet, SingleSelectFacet, SingleLinksFacet } from '@elastic/react-search-ui-views';
import Result from './SchoolSearch/Result';
import keys from '../data/keys.json';

import "@elastic/react-search-ui-views/lib/styles/styles.css";

const connector = new AppSearchAPIConnector({
    searchKey: keys.searchKey,
    engineName: keys.engineName,
    endpointBase: keys.endpointBase
});
// Step #3: Configuration Options
const configurationOptions = {
    apiConnector: connector,
    searchQuery: {
        search_fields: {
            name: {}
        },
        disjunctiveFacets: ["degreetype", "course_requirements", "median_mcat", "median_gpa", "standardized_tests","eligible"],
        facets: {
            degreetype: { type: "value" },
            course_requirements: { type: "value" },
            standardized_tests: { type: "value" },
            eligible: { type: "value" },
            school_type: { type: "value" },
            campus_type: { type: "value" },
            admissions_tags: { type: "value" },
            dual_degree_programs: { type: "value" },

            //median_gpa: { type: "range"}
        }
    }
};
    // Let's fill this in together.

export default function Home() {


    return (
            <SearchProvider config={configurationOptions} >
                <div>
                
                <Layout header={<SearchBox />}
                    

                    sideContent={
                        <div>
                            <Facet field="degreetype" label="Degree" filterType="any" isFilterable={true} />
                            <Facet field="course_requirements" label="Required Courses" filterType="none" isFilterable={true} />
                            <Facet field="standardized_tests" label="Standardized Tests" filterType="none" isFilterable={true} />
                            <Facet field="eligible" label="Accepts" filterType="none" isFilterable={true} />
                            <Facet field="campus_type" label="Campus" filterType="any" isFilterable={true} />
                            <Facet field="school_type" label="School" filterType="any" isFilterable={true} />
                            <Facet field="dual_degree_programs" label="School" filterType="any" isFilterable={true} />
                            <Facet field="admissions_tags" label="Admissions Tags" filterType="any" isFilterable={true} />
                            


                        </div>
                    }

                    bodyContent={<Results resultView={Result} urlField="page" titleField="name" />} /> 
                </div>
                </SearchProvider>
    );
  }

