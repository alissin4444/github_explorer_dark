import React, { FC, useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiHeart } from 'react-icons/fi';

import api from '../../services/api';

import { Header, RepositoryInfo, Issues } from './styles';

import logo from '../../assets/dark/logo.svg';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logo} alt="Github explorer" />
        <Link to="/">
          <FiChevronLeft size={20} />
          VOLTAR
        </Link>
      </Header>
      {repository && (
        <RepositoryInfo liked>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>
                {repository.full_name}
                <FiHeart size={26} />
              </strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>STARS</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>FORKS</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>ISSUES ABERTAS</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}
      <Issues>
        {issues &&
          issues.map((issue) => (
            <a href={issue.html_url} target="_blanc" key={issue.id}>
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </div>
              <FiChevronRight size={20} />
            </a>
          ))}
      </Issues>
    </>
  );
};

export default Repository;
