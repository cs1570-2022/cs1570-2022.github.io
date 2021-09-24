% stolen and revised from cs31 for use of cs157 by bniedzie
% Tue Nov 09 23:28:49 EST 2011

% updated for 2020 course (evelasq2)
% Mon Aug 31 20:54 EST 2020


\NeedsTeXFormat{LaTeX2e}
%\ProvidesClass{cs17}[1998/08/26 v1.1 (dpb)]
%\ProvidesClass{/course/cs022/src/cs22}[2000/11/27 v1.2 (magoldbe)]
\ProvidesClass{cs157}[2012/01/08 v1.0 (bniedzie)]

\def\CS@probdir{/course/cs157/asgn/problems}

\def\LayoutTextField#1#2{#2} % override default in hyperref                                           
\def\answerline#1#2{\vbox{\hbox{\TextField[name=#1, height=10pt, width=#2]{\null}}}}
\def\answerbox#1{\vbox{\hbox{\TextField[multiline=true, name=#1, width=6.5in]{\null}}}}

\DeclareRobustCommand{\CS@classnum}{\textbf{CSCI 1570 - Fall 2021}}
\DeclareRobustCommand{\CS@classname}{Design and Analysis of Algorithms}
\DeclareRobustCommand{\CS@prof}{Lorenzo De Stefani}
\LoadClass{common/cs}[1998/06/08]
%
\parskip = 6pt
\parindent = 0pt
%\DeclareRobustCommand{\eval}{\ensuremath{\Rightarrow{}}}
%\DeclareRobustCommand{\tilde}{\~{}}
%\DeclareRobustCommand{\R}{{\mathbf R}}	% set of all real numbers
%\DeclareRobustCommand{\Q}{{\mathbf Q}}	% set of all real numbers
%\DeclareRobustCommand{\Z}{{\mathbf Z}}  % set of all integers
\DeclareRobustCommand{\N}{{\mathbf N}}  % set of all natural numbers
%\DeclareRobustCommand{\P}{{\mathcal P}} % the power set
%\DeclareRobustCommand{\IFF}{\leftrightarrow} % logical bijunction?
%\DeclareRobustCommand{\IMP}{\to} % logical implication
%\DeclareRobustCommand{\NOT}{\ensuremath{\sim}} % logical not
%\DeclareRobustCommand{\NOT}[1]{\ensuremath{\overline{#1}}} % logical not
%\DeclareRobustCommand{\NOT}[1]{{#1}'} % logical not
%\DeclareRobustCommand{\AND}{\land} % logical and
%\DeclareRobustCommand{\AND}{\ensuremath{\bullet}} % logical and
%\DeclareRobustCommand{\OR}{\ensuremath{+}} % logical or
%\DeclareRobustCommand{\T}{{\mathbf T}} % true
%\DeclareRobustCommand{\F}{{\mathbf F}} % false
%\DeclareRobustCommand{\WITH}{\;|\;} % such that
\DeclareRobustCommand{\AM}{{\scshape am}}
\DeclareRobustCommand{\PM}{{\scshape pm}}

% Introduction for problem set.
\DeclareRobustCommand{\psethandin}[1]{

All problem sets must be handed in {\bf on paper} in class on the due date.

%Be sure to review the Electronic Submission document on the course website before handing in.
%\textbf{We will not grade submissions that do not meet these regulations.}
%\newline Run {\tt cs157\_handin ps#1} in the directory where your file is stored to hand in.

Please ensure that your solutions are complete, clear, and concise.  Points will be deducted for overly complex solutions.

}

% Introduction for homework.
\DeclareRobustCommand{\homeworkhandin}{
This homework must be typed in \LaTeX\ and handed in via Gradescope. 

% \textbf{Homework will \emph{not} be accepted after the late deadline.} Solutions to different problems may be turned in by different deadlines.

% \textbf{This homework must be \emph{written together in pairs}, and \emph{you must understand and be able to answer questions about the entirety of the joint submission.}} You are encouraged, as always, to discuss the problems with other pairs or consult online resources. Make sure to hand in one solution per problem for both you and your partner, and do not forget to put both Banner IDs on it. Note that future pair assignments must be done with a different partner, unless otherwise indicated.

% See the Google doc emailed to the course list for your assigned partner. {\bf If you do not have a partner, or have not been getting course emails, email \href{mailto:cs1570headtas@lists.brown.edu}{cs1570headtas@lists.brown.edu} immediately.}

% Working in pairs will give you an opportunity to improve your thinking, communication, and writing skills. If something you write requires a verbal explanation for your partner to understand it, consider this a valuable sign that this explanation should be included in your writeup. In particular, you are responsible for \emph{everything} you and your partner submit. It is an academic code violation to sign your name to something that is not yours.

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


