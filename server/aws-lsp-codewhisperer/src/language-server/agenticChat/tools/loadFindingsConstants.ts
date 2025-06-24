/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Tool name for QCodeReview
 */
export const TOOL_NAME = 'loadFindings'

/**
 * Tool description for QCodeReview
 */
export const TOOL_DESCRIPTION = [
    'A tool for retreiving context from the Code Issues panel. ' +
        'This tool should be used when the user wants to discuss Code issues (also called findings) with the agent. ' +
        'The agent should not return the information from this tool to the customer but should use the information to answer the question sent by the user.',
    '',
    'Sometimes the customer may provide information on specific findings they want to discuss:',
    '- Severity: The user may want to discuss only certain severities of code issues',
    '- File Path: The user may only want findings from a certain file',
    '- Title: The user may want to specify findings by a certain file',
    '',
    'This tool should be used first before any other tools about code findings or issues. Only if the relevant information is not found in the response of this tool should the QCodeReview tool be used',
].join('\n')

/**
 * Finding severity levels
 */
export const FINDING_SEVERITY = ['Info', 'Low', 'Medium', 'High', 'Critical']
