'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import useSWR from 'swr';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DashboardPage() {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const { data: posts, error } = useSWR<Post[]>(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );

  const filteredPosts = posts?.filter((post: Post) =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.id.toString().includes(search)
  ) || [];

  const totalPages = Math.ceil((filteredPosts?.length || 0) / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error loading posts. Please try again later.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Card className="p-6 bg-white dark:bg-gray-800">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Posts</h2>
          <Input
            placeholder="Search by title or ID..."
            className="max-w-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="rounded-md border dark:border-gray-700">
          <Table>
            <TableHeader>
              <TableRow className="dark:border-gray-700">
                <TableHead className="dark:text-gray-300">ID</TableHead>
                <TableHead className="dark:text-gray-300">Title</TableHead>
                <TableHead className="dark:text-gray-300">Content</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedPosts.map((post: Post) => (
                <TableRow key={post.id} className="dark:border-gray-700">
                  <TableCell className="dark:text-gray-300">{post.id}</TableCell>
                  <TableCell className="font-medium dark:text-gray-300">{post.title}</TableCell>
                  <TableCell className="truncate max-w-md dark:text-gray-300">
                    {post.body}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {Math.min(filteredPosts.length, postsPerPage)} of {filteredPosts.length} posts
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded border dark:border-gray-700 dark:text-gray-300 disabled:opacity-50 cursor-pointer"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded border dark:border-gray-700 dark:text-gray-300 disabled:opacity-50 cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
} 