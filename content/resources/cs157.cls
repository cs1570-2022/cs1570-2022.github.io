% stolen and revised from cs31 for use of cs157 by bniedzie
% Tue Nov 09 23:28:49 EST 2011

% updated for 2020 course (evelasq2)
% Mon Aug 31 20:54 EST 2020
% updated for 2022 course (rscheide)

\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{cs157}[2012/01/08 v1.0 (bniedzie)]

\def\CS@probdir{/course/cs157/asgn/problems}

\def\LayoutTextField#1#2{#2} % override default in hyperref                                           
\def\answerline#1#2{\vbox{\hbox{\TextField[name=#1, height=10pt, width=#2]{\null}}}}
\def\answerbox#1{\vbox{\hbox{\TextField[multiline=true, name=#1, width=6.5in]{\null}}}}

\DeclareRobustCommand{\CS@classnum}{\textbf{CSCI 1570 - Fall 2022}}
\DeclareRobustCommand{\CS@classname}{Design and Analysis of Algorithms}
\DeclareRobustCommand{\CS@prof}{Lorenzo De Stefani}
\LoadClass{common/cs}[1998/06/08]
%
\parskip = 6pt
\parindent = 0pt
\DeclareRobustCommand{\N}{{\mathbf N}}  % set of all natural numbers
\DeclareRobustCommand{\AM}{{\scshape am}}
\DeclareRobustCommand{\PM}{{\scshape pm}}

% Introduction for problem set.
\DeclareRobustCommand{\psethandin}[1]{

All problem sets must be handed in {\bf on paper} in class on the due date.

Please ensure that your solutions are complete, clear, and concise.  Points will be deducted for overly complex solutions.

}

% Introduction for homework.
\DeclareRobustCommand{\homeworkhandin}{
This homework must be typed in \LaTeX\ and handed in via Gradescope. 

Please ensure that your solutions are complete, concise, and communicated clearly. Use full sentences and plan your presentation before you write. Except in the rare cases where it is indicated otherwise, consider every problem as asking you to prove your result.
}

% Special due date format.
\newcommand*{\ifempty}[3]{
	\def\temp{#1\unskip}\ifx\temp\empty #2 \else #3 \fi
}

\newcommand*{\specialdue}[2]{
  \specialdate{
    Due: 
    \ifthenelse{\equal{#1}{}}{}{#1 at 2:30 {\normalsize PM EDT (scratch work submission)} \\}
    \ifthenelse{\equal{#2}{}}{}{#2 at 2:30 {\normalsize PM EDT (final submission)} \\}
  }
  \DeclareRobustCommand{\CS@duedate}{#2}
}

\newcommand*{\coursedue}[1]{
     \DeclareRobustCommand{\CS@duedate}{#1 at 2:20 \PM}
}

\newenvironment{problem}[1]{
  \subsubsection*{Problem #1}
}


\DeclareRobustCommand{\midtermpolicyremind}{
\textbf{Reminder}:
Your name should not appear anywhere on your handin; each individual
page of the homework should include your Banner ID only. For your digital submission, each page should include work for only one problem (i.e., make a new page/new pages for each problem).

Collaboration or any kind or use of any third-party resource is strictly \textbf{not allowed} on this assignment. The TA staff will only answer questions regarding clarifications on the statement of the problems in the assignment. Questions should be asked via private posts on Ed. Please monitor Ed, as we will post clarifications of frequently asked questions there. 

Hand in your solutions by 14:29pm to Gradescope.
See the course syllabus for the late policy. Usage of any materials outside of course notes, the course textbook, lecture slides and Ed posts is strictly forbidden.

You may apply up to two late days to this assigment.
}

\usepackage{hyperref}
\usepackage{tikz}
\usepackage{graphicx}
\graphicspath{graphics}
\usepackage{listings}
\usepackage{booktabs}
\usepackage{graphicx}
\usepackage{multirow}
\usepackage{multicol}

\usepackage{amsmath}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{algorithm}
\usepackage{algpseudocode}
\usepackage[lighttt]{lmodern}
\makeatletter
\algrenewcommand\ALG@beginalgorithmic{\ttfamily}
\makeatother

\usepackage[noframe]{showframe}
\usepackage{framed}
\usepackage[shortlabels]{enumitem}

\renewenvironment{shaded}{%
  \def\FrameCommand{\fboxsep=\FrameSep \colorbox{shadecolor}}%
  \MakeFramed{\advance\hsize-\width \FrameRestore\FrameRestore}}%
 {\endMakeFramed}
\definecolor{shadecolor}{gray}{0.9}

\newenvironment{solution}{%
  \def\FrameCommand{\fboxsep=\FrameSep \colorbox{shadecolor}}%
  \MakeFramed{\advance\hsize-\width \FrameRestore\FrameRestore}
  \textbf{Solution}}%
 {\endMakeFramed}
 
\newcommand{\abs}[1]{\left \lvert #1 \right \rvert}
 
\definecolor{shadecolor}{gray}{0.9}


\algtext*{EndIf} % Remove "end if" text
\algtext*{EndFor} % Remove "end if" text
\algtext*{EndProcedure} % Remove "end if" text
\algtext*{EndWhile}
\algrenewcommand\algorithmicrequire{\textbf{Input:}} % Input for Procedures
\algrenewcommand\algorithmicensure{\textbf{Output:}} % Output for Procedures

\makeatletter
\newcommand{\algmargin}{\the\ALG@thistlm}
\makeatother
\algnewcommand{\parState}[1]{\State%
  \parbox[t]{\dimexpr\linewidth-\algmargin}{\strut #1\strut}}